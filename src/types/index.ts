export type TBike = {
  _id?: string; // for admin dashboard map key.
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
};
export interface TUser {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: string;
}

export interface TStartTime {
  startTime: String;
}

export type TTestimonials = {
  name: string;
  quote: string;
};
export type TWhyChooseUs = {
  title: string;
  description: string;
};

export type TContactUs = {
  name: string;
  email: string;
  message: string;
};
