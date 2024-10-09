import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from 'api/store';
import type { AppDispatch } from 'api/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
