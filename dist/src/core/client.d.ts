import { ClientOptions } from '../types';
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
  options: ClientOptions;
  request: LinkedInRequest;
  login: Login;
  search: SearchRepository;
  invitation: InvitationRepository;
  profile: ProfileRepository;
  conversation: ConversationRepository;
  message: MessageRepository;
  constructor(options?: ClientOptions);
}
