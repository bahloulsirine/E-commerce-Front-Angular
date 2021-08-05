export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  address: string;
  cin: number;
  birthday: Date;
  driverLicence?: number;
  phoneNumber: string;
  totalOrder?: number;
  isAccountNonExpired: boolean;
  isAccountNonLocked: boolean;
  isCredentialsNonExpired: boolean;
  isEnabled: boolean;
  role: Role;
  authorities: Authority[];
}

export interface Authority {
  authority: string;
}

export interface Role {
  id?: number;
  role: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  address: string;
  cin: number;
  password: string;
  birthday: Date;
  driverLicence?: number;
  phoneNumber: string;
}

export interface UserUpdate {
  id?: number;
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  address: string;
  cin: number;
  birthday: Date;
  driverLicence: number;
  phoneNumber: string;
}
export interface UserAuth {
  userName: string;
  password: string;
}
