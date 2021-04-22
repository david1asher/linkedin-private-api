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

export class Client {
  request: LinkedInRequest;

  login: Login;

  search: SearchRepository;

  invitation: InvitationRepository;

  profile: ProfileRepository;

  conversation: ConversationRepository;

  message: MessageRepository;

  constructor(options: AxiosRequestConfig = {}) {
    this.request = new LinkedInRequest(options);

    this.login = new Login({ client: this });

    this.search = new SearchRepository({ client: this });

    this.invitation = new InvitationRepository({ client: this });

    this.profile = new ProfileRepository({ client: this });

    this.conversation = new ConversationRepository({ client: this });

    this.message = new MessageRepository({ client: this });
  }
}
