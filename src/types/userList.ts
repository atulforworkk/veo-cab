 export interface userList {
  status: number;
  data: Datum[];
}

interface Datum {
  _id: string;
  user: User;
  memberSince: string;
}

interface User {
  currentLocation: CurrentLocation;
  uploadId: UploadId;
  bankDetails: BankDetails;
  accessRoles: AccessRoles;
  isOnline: boolean;
  driverInBooking: boolean;
  _id: string;
  userId?: string;
  mobileNumber?: string;
  otp?: string;
  otpExpiration?: string;
  accountVerification: boolean;
  completeProfile: boolean;
  isState: string;
  isCity: string;
  userType: string;
  drivingLicense?: DrivingLicense;
  referredBy: any[];
  wallet: number;
  userSignupReward?: number;
  isuserSignupReward?: boolean;
  isVerified: boolean;
  status: boolean;
  isDashBoard?: boolean;
  isPrivacyPolicy?: boolean;
  isOnBoardingManage?: boolean;
  isManageCustomer?: boolean;
  isDashboard?: boolean;
  isCarManagement?: boolean;
  isTermAndConditions?: boolean;
  ismanageCustomer?: boolean;
  isPushNotification?: boolean;
  isManagePromoCode?: boolean;
  isRoleAccessManage?: boolean;
  role: any[];
  documentVerification: string;
  isWalletRecharge?: boolean;
  isWalletWithdraw?: boolean;
  isWalletTransfer?: boolean;
  referralLevels: any[];
  cars: Car[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  dummyImage: DummyImage[];
  password?: string;
  paymentMethod?: string;
  customerReach?: string;
  marketPreference?: string;
}

interface DummyImage {
  img: string;
  _id: string;
}

interface Car {
  car: string;
  licenseNumber: string;
  _id: string;
}

interface DrivingLicense {
  drivingLicenseNo: null | string;
  frontImage: null | string;
  backImage: null | string;
  isDrivingLicenseUpload: boolean;
}

interface AccessRoles {
  isDashBoard: boolean;
  isPrivacyPolicy: boolean;
  isOnBoardingManage: boolean;
  isManageCustomer: boolean;
  isDashboard: boolean;
  isCarManagement: boolean;
  isTermAndConditions: boolean;
  ismanageCustomer: boolean;
  isPushNotification: boolean;
  isManagePromoCode: boolean;
  isRoleAccessManage: boolean;
}

interface BankDetails {
  isUploadbankDetails: boolean;
  accountHolderName?: string;
  accountNo?: string;
  bankName?: string;
  cheque?: string;
  ifscCode?: string;
  reAccountNumber?: string;
  branch?: string;
}

interface UploadId {
  isPasportImage: boolean;
  drivingLicenseImage: null | string;
  isDrivingLicenseUpload: boolean;
  carRegistrationImage: null | string;
  isCarRegistrationImageUpload: boolean;
  insuranceImage: null | string;
  isInsuranceImageUpload: boolean;
  vechileInsceptionImage: null | string;
  isVechileInsceptionImageUpload: boolean;
  aadharCardNo?: null | string;
  frontImage?: null | string;
  backImage?: null | string;
  isAadharCardUpload?: boolean;
  isPanCardUpload?: boolean;
  panImage?: string;
  panName?: string;
  panNumber?: string;
  pasportImage: null | string;
  ispasportImage?: boolean;
}

interface CurrentLocation {
  type: string;
  coordinates: number[];
}