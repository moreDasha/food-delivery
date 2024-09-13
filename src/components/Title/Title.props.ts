import { HTMLAttributes, ReactNode } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode
}