import { StickyDirection } from '@angular/cdk/table';

export interface User{
  email: string;
  fullname: string;
  password: string;
  confirmPassword?: string;
}
