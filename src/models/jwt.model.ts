export interface JwtResponse {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  address: string;
  cin: number;
  birthday: string;
  driverLicence: number;
  phoneNumber: string;
  totalOrder: number;
  isAccountNonExpired: boolean;
  isAccountNonLocked: boolean;
  isCredentialsNonExpired: boolean;
  isEnabled: boolean;
  role: Role;
  enabled: boolean;
  authorities: Authority[];
  username: string;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
}

export interface Authority {
  authority: string;
}

export interface Role {
  id: number;
  role: string;
}
