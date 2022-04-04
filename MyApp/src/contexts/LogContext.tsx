import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
import {nanoid} from 'nanoid';
import logsStorage from '../storages/logsStorage';

type State = {
  logs: any[];
  setLogs?: any;
  onCreate?: any;
  onModify?: any;
  onRemove?: any;
};

const LogContext = createContext<State>({logs: []});

export function LogContextProvider({children}: {children: any}) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState<any[]>(
    Array.from({length: 10})
      .map((_, idx) => ({
        id: nanoid(),
        title: `Log ${idx}`,
        body: `Log ${idx}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );

  const onCreate = ({
    title,
    body,
    date,
  }: {
    title: string;
    body: string;
    date: any;
  }) => {
    const log = {
      id: nanoid(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify = (modified: any) => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove = (id: string) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);
  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
