import { AxiosRequestConfig } from 'axios-https-proxy-fix';
import {
  ConversationRepository,
  InvitationRepository,
  MessageRepository,
  ProfileRepository,
  SearchRepository,
} from '../repositories';
import { LinkedInRequest } from './linkedin-request';
import { Login } from './login';
export declare class Client {
  request: LinkedInRequest;
  login: Login;
  search: SearchRepository;
  invitation: InvitationRepository;
  profile: ProfileRepository;
  conversation: ConversationRepository;
  message: MessageRepository;
  constructor(options?: AxiosRequestConfig);
}
