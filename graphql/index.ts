import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AboutPage = {
  __typename?: 'AboutPage';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type AboutPageInput = {
  content: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Employee = {
  __typename?: 'Employee';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type EmployeeAggregator = {
  __typename?: 'EmployeeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EmployeeConnection = {
  __typename?: 'EmployeeConnection';
  aggregate?: Maybe<EmployeeAggregator>;
  groupBy?: Maybe<EmployeeGroupBy>;
  values?: Maybe<Array<Maybe<Employee>>>;
};

export type EmployeeConnectionCreated_At = {
  __typename?: 'EmployeeConnectionCreated_at';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmployeeConnectionId = {
  __typename?: 'EmployeeConnectionId';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmployeeConnectionImage = {
  __typename?: 'EmployeeConnectionImage';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmployeeConnectionName = {
  __typename?: 'EmployeeConnectionName';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmployeeConnectionOffice = {
  __typename?: 'EmployeeConnectionOffice';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmployeeConnectionPublished_At = {
  __typename?: 'EmployeeConnectionPublished_at';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmployeeConnectionTitle = {
  __typename?: 'EmployeeConnectionTitle';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmployeeConnectionUpdated_At = {
  __typename?: 'EmployeeConnectionUpdated_at';
  connection?: Maybe<EmployeeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmployeeGroupBy = {
  __typename?: 'EmployeeGroupBy';
  created_at?: Maybe<Array<Maybe<EmployeeConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<EmployeeConnectionId>>>;
  image?: Maybe<Array<Maybe<EmployeeConnectionImage>>>;
  name?: Maybe<Array<Maybe<EmployeeConnectionName>>>;
  office?: Maybe<Array<Maybe<EmployeeConnectionOffice>>>;
  published_at?: Maybe<Array<Maybe<EmployeeConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<EmployeeConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<EmployeeConnectionUpdated_At>>>;
};

export type EmployeeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  office?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  slogan: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  video?: Maybe<UploadFile>;
};

export type HomePageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slogan: Scalars['String'];
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = AboutPage | Employee | EmployeeAggregator | EmployeeConnection | EmployeeConnectionCreated_At | EmployeeConnectionId | EmployeeConnectionImage | EmployeeConnectionName | EmployeeConnectionOffice | EmployeeConnectionPublished_At | EmployeeConnectionTitle | EmployeeConnectionUpdated_At | EmployeeGroupBy | HomePage | I18NLocale | Office | OfficeAggregator | OfficeConnection | OfficeConnectionCity | OfficeConnectionContinent | OfficeConnectionCountry | OfficeConnectionCreated_At | OfficeConnectionEmail | OfficeConnectionId | OfficeConnectionPhoneNumber | OfficeConnectionPublished_At | OfficeConnectionUpdated_At | OfficeGroupBy | Product | ProductAggregator | ProductConnection | ProductConnectionCreated_At | ProductConnectionDescription | ProductConnectionId | ProductConnectionName | ProductConnectionPreviewImage | ProductConnectionPublished_At | ProductConnectionUpdated_At | ProductGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateEmployeePayload | CreateOfficePayload | CreateProductPayload | CreateRolePayload | CreateUserPayload | DeleteAboutPagePayload | DeleteEmployeePayload | DeleteFilePayload | DeleteHomePagePayload | DeleteOfficePayload | DeleteProductPayload | DeleteRolePayload | DeleteUserPayload | UpdateAboutPagePayload | UpdateEmployeePayload | UpdateHomePagePayload | UpdateOfficePayload | UpdateProductPayload | UpdateRolePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee?: Maybe<CreateEmployeePayload>;
  createOffice?: Maybe<CreateOfficePayload>;
  createProduct?: Maybe<CreateProductPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAboutPage?: Maybe<DeleteAboutPagePayload>;
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHomePage?: Maybe<DeleteHomePagePayload>;
  deleteOffice?: Maybe<DeleteOfficePayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<UpdateAboutPagePayload>;
  updateEmployee?: Maybe<UpdateEmployeePayload>;
  updateFileInfo: UploadFile;
  updateHomePage?: Maybe<UpdateHomePagePayload>;
  updateOffice?: Maybe<UpdateOfficePayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateEmployeeArgs = {
  input?: InputMaybe<CreateEmployeeInput>;
};


export type MutationCreateOfficeArgs = {
  input?: InputMaybe<CreateOfficeInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<CreateProductInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteEmployeeArgs = {
  input?: InputMaybe<DeleteEmployeeInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteOfficeArgs = {
  input?: InputMaybe<DeleteOfficeInput>;
};


export type MutationDeleteProductArgs = {
  input?: InputMaybe<DeleteProductInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  input?: InputMaybe<UpdateAboutPageInput>;
};


export type MutationUpdateEmployeeArgs = {
  input?: InputMaybe<UpdateEmployeeInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateHomePageArgs = {
  input?: InputMaybe<UpdateHomePageInput>;
};


export type MutationUpdateOfficeArgs = {
  input?: InputMaybe<UpdateOfficeInput>;
};


export type MutationUpdateProductArgs = {
  input?: InputMaybe<UpdateProductInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Office = {
  __typename?: 'Office';
  city: Scalars['String'];
  continent: Scalars['String'];
  country: Scalars['String'];
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  phoneNumber: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type OfficeAggregator = {
  __typename?: 'OfficeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OfficeConnection = {
  __typename?: 'OfficeConnection';
  aggregate?: Maybe<OfficeAggregator>;
  groupBy?: Maybe<OfficeGroupBy>;
  values?: Maybe<Array<Maybe<Office>>>;
};

export type OfficeConnectionCity = {
  __typename?: 'OfficeConnectionCity';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OfficeConnectionContinent = {
  __typename?: 'OfficeConnectionContinent';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OfficeConnectionCountry = {
  __typename?: 'OfficeConnectionCountry';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OfficeConnectionCreated_At = {
  __typename?: 'OfficeConnectionCreated_at';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type OfficeConnectionEmail = {
  __typename?: 'OfficeConnectionEmail';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OfficeConnectionId = {
  __typename?: 'OfficeConnectionId';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type OfficeConnectionPhoneNumber = {
  __typename?: 'OfficeConnectionPhoneNumber';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OfficeConnectionPublished_At = {
  __typename?: 'OfficeConnectionPublished_at';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type OfficeConnectionUpdated_At = {
  __typename?: 'OfficeConnectionUpdated_at';
  connection?: Maybe<OfficeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type OfficeGroupBy = {
  __typename?: 'OfficeGroupBy';
  city?: Maybe<Array<Maybe<OfficeConnectionCity>>>;
  continent?: Maybe<Array<Maybe<OfficeConnectionContinent>>>;
  country?: Maybe<Array<Maybe<OfficeConnectionCountry>>>;
  created_at?: Maybe<Array<Maybe<OfficeConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<OfficeConnectionEmail>>>;
  id?: Maybe<Array<Maybe<OfficeConnectionId>>>;
  phoneNumber?: Maybe<Array<Maybe<OfficeConnectionPhoneNumber>>>;
  published_at?: Maybe<Array<Maybe<OfficeConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<OfficeConnectionUpdated_At>>>;
};

export type OfficeInput = {
  city: Scalars['String'];
  continent: Scalars['String'];
  country: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  name: Scalars['String'];
  previewImage?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type ProductImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate?: Maybe<ProductAggregator>;
  groupBy?: Maybe<ProductGroupBy>;
  values?: Maybe<Array<Maybe<Product>>>;
};

export type ProductConnectionCreated_At = {
  __typename?: 'ProductConnectionCreated_at';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductConnectionDescription = {
  __typename?: 'ProductConnectionDescription';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductConnectionName = {
  __typename?: 'ProductConnectionName';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionPreviewImage = {
  __typename?: 'ProductConnectionPreviewImage';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductConnectionPublished_At = {
  __typename?: 'ProductConnectionPublished_at';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductConnectionUpdated_At = {
  __typename?: 'ProductConnectionUpdated_at';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ProductConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  name?: Maybe<Array<Maybe<ProductConnectionName>>>;
  previewImage?: Maybe<Array<Maybe<ProductConnectionPreviewImage>>>;
  published_at?: Maybe<Array<Maybe<ProductConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>;
};

export type ProductInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  previewImage?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPage>;
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  employeesConnection?: Maybe<EmployeeConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  homePage?: Maybe<HomePage>;
  me?: Maybe<UsersPermissionsMe>;
  office?: Maybe<Office>;
  offices?: Maybe<Array<Maybe<Office>>>;
  officesConnection?: Maybe<OfficeConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryAboutPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmployeeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmployeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmployeesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOfficeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOfficesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryOfficesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProductsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateEmployeeInput = {
  data?: InputMaybe<EmployeeInput>;
};

export type CreateEmployeePayload = {
  __typename?: 'createEmployeePayload';
  employee?: Maybe<Employee>;
};

export type CreateOfficeInput = {
  data?: InputMaybe<OfficeInput>;
};

export type CreateOfficePayload = {
  __typename?: 'createOfficePayload';
  office?: Maybe<Office>;
};

export type CreateProductInput = {
  data?: InputMaybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutPagePayload = {
  __typename?: 'deleteAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type DeleteEmployeeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmployeePayload = {
  __typename?: 'deleteEmployeePayload';
  employee?: Maybe<Employee>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHomePagePayload = {
  __typename?: 'deleteHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type DeleteOfficeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteOfficePayload = {
  __typename?: 'deleteOfficePayload';
  office?: Maybe<Office>;
};

export type DeleteProductInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAboutPageInput = {
  content?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditEmployeeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  office?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditHomePageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slogan?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditOfficeInput = {
  city?: InputMaybe<Scalars['String']>;
  continent?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditProductInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  previewImage?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateAboutPageInput = {
  data?: InputMaybe<EditAboutPageInput>;
};

export type UpdateAboutPagePayload = {
  __typename?: 'updateAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type UpdateEmployeeInput = {
  data?: InputMaybe<EditEmployeeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmployeePayload = {
  __typename?: 'updateEmployeePayload';
  employee?: Maybe<Employee>;
};

export type UpdateHomePageInput = {
  data?: InputMaybe<EditHomePageInput>;
};

export type UpdateHomePagePayload = {
  __typename?: 'updateHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type UpdateOfficeInput = {
  data?: InputMaybe<EditOfficeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateOfficePayload = {
  __typename?: 'updateOfficePayload';
  office?: Maybe<Office>;
};

export type UpdateProductInput = {
  data?: InputMaybe<EditProductInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPage', title: string, content: string } | null | undefined };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePage', title: string, slogan: string, video?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined };

export type OfficeOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficeOverviewQuery = { __typename?: 'Query', offices?: Array<{ __typename?: 'Office', id: string, city: string, country: string, continent: string, phoneNumber: string, email: string } | null | undefined> | null | undefined };

export type OfficePageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OfficePageQuery = { __typename?: 'Query', office?: { __typename?: 'Office', city: string, country: string, continent: string, phoneNumber: string, email: string } | null | undefined, employees?: Array<{ __typename?: 'Employee', id: string, name: string, title: string, image?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined };

export type ProductIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductIdsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string } | null | undefined> | null | undefined };

export type ProductOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductOverviewQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, description: string, previewImage?: { __typename?: 'UploadFile', alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type SingleProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingleProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, previewImage?: { __typename?: 'UploadFile', alternativeText?: string | null | undefined, url: string } | null | undefined, images?: Array<{ __typename?: 'UploadFile', alternativeText?: string | null | undefined, url: string } | null | undefined> | null | undefined } | null | undefined };


export const AboutPageDocument = gql`
    query AboutPage {
  aboutPage {
    title
    content
  }
}
    `;
export const HomePageDocument = gql`
    query HomePage {
  homePage {
    title
    slogan
    video {
      url
    }
  }
}
    `;
export const OfficeOverviewDocument = gql`
    query OfficeOverview {
  offices {
    id
    city
    country
    continent
    phoneNumber
    email
  }
}
    `;
export const OfficePageDocument = gql`
    query OfficePage($id: ID!) {
  office(id: $id) {
    city
    country
    continent
    phoneNumber
    email
  }
  employees(where: {office: {id: $id}}) {
    id
    name
    image {
      url
    }
    title
  }
}
    `;
export const ProductIdsDocument = gql`
    query ProductIds {
  products {
    id
  }
}
    `;
export const ProductOverviewDocument = gql`
    query ProductOverview {
  products {
    id
    name
    description
    previewImage {
      alternativeText
      url
    }
  }
}
    `;
export const SingleProductDocument = gql`
    query SingleProduct($id: ID!) {
  product(id: $id) {
    id
    name
    description
    previewImage {
      alternativeText
      url
    }
    images {
      alternativeText
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AboutPage(variables?: AboutPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutPageQuery>(AboutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutPage');
    },
    HomePage(variables?: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage');
    },
    OfficeOverview(variables?: OfficeOverviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OfficeOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OfficeOverviewQuery>(OfficeOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OfficeOverview');
    },
    OfficePage(variables: OfficePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OfficePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OfficePageQuery>(OfficePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OfficePage');
    },
    ProductIds(variables?: ProductIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductIdsQuery>(ProductIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductIds');
    },
    ProductOverview(variables?: ProductOverviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductOverviewQuery>(ProductOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductOverview');
    },
    SingleProduct(variables: SingleProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SingleProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SingleProductQuery>(SingleProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SingleProduct');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;