import type {
  Comment,
  FeeCollectModuleSettings,
  FeeFollowModuleSettings,
  FreeCollectModuleSettings,
  LimitedFeeCollectModuleSettings,
  LimitedTimedFeeCollectModuleSettings,
  Mirror,
  Post,
  ProfileFollowModuleSettings,
  RevertCollectModuleSettings,
  RevertFollowModuleSettings,
  TimedFeeCollectModuleSettings
} from 'lens';

export type SphrexPublication = Post & Mirror & Comment;
export type Community = Post;
export type SphrexCollectModule = FeeCollectModuleSettings &
  FreeCollectModuleSettings &
  LimitedFeeCollectModuleSettings &
  LimitedTimedFeeCollectModuleSettings &
  RevertCollectModuleSettings &
  TimedFeeCollectModuleSettings;
export type SphrexFollowModule = FeeFollowModuleSettings &
  ProfileFollowModuleSettings &
  RevertFollowModuleSettings;
export interface SphrexAttachment {
  item: string;
  type: string;
  altTag: string;
}
export interface NewSphrexAttachment extends Omit<SphrexAttachment, 'item'> {
  id: string;
  item?: string;
  previewItem?: string;
}
export interface UserSuggestion {
  uid: string;
  id: string;
  display: string;
  name: string;
  picture: string;
}
export interface OG {
  title: string;
  description: string;
  site: string;
  url: string;
  favicon: string;
  thumbnail: string;
  isSquare: boolean;
  html: string;
}

export interface ProfileInterest {
  category: { label: string; id: string };
  subCategories: Array<{ label: string; id: string }>;
}
