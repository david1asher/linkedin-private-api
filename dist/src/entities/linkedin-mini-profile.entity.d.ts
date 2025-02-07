import { LinkedInVectorImage } from './linkedin-vector-image.entity';
export declare type MiniProfileUrn = string;
export declare const MINI_PROFILE_TYPE = "com.linkedin.voyager.identity.shared.MiniProfile";
export interface LinkedInMiniProfile {
    $type: typeof MINI_PROFILE_TYPE;
    backgroundImage: LinkedInVectorImage;
    entityUrn: MiniProfileUrn;
    firstName: string;
    lastName: string;
    memorailzed?: boolean;
    objectUrn: string;
    occupation: string;
    picture?: LinkedInVectorImage;
    publicIdentifier: string;
    trackingId: string;
}
