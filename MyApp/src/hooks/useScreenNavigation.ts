import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigatePramList} from '../types/navigate.types';

export default function useScreenNavigation(): NavigationProp<NavigatePramList> {
  return useNavigation<NavigationProp<NavigatePramList>>();
}
