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
  startTime: string;
  advancePayment: string;
}
export type TBooking = {
  _id: string;
  userId: string;
  bikeId: string;
  startTime: string;
  transactionID: string;
  returnTime: string;
  totalCost: number;
  isReturned: boolean;
  advancePayment: boolean;
  payment: boolean;
};
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
export type TCalculate = {
  bookingId: string;
  bikeReturnTime: string;
};

export type TPayDetails = {
  amount: number;
  bookingId: string;
};

export type TSearchableFields = {
  searchByName?: string;
  searchByBrand?: string;
  searchByModel?: string;
  searchByAvailability?: string;
};

export type TCoupon = {
  discount: number;
  bikeId?: string;
  userId?: string;
  code: string;
  details: string;
  status: boolean;
};

export type TBlogs = {
  id?: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

export type TOffer = {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: string;
  validity: string;
};
