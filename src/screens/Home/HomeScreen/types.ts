import { VARIANT } from '@/screens/Home/HomeScreen/constants';

export type Variant = (typeof VARIANT)[keyof typeof VARIANT];
