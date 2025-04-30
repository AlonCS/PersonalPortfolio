import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  // avatarRing,
  resumeFileUrl,
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="p-8">
        <div className="flex flex-row items-start gap-8">
          {/* Avatar image */}
          {loading || !profile ? (
            <div className="w-44 h-48 rounded-lg overflow-hidden flex-shrink-0">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: 'rounded-lg',
              })}
            </div>
          ) : (
            <div className="w-44 h-48 rounded-lg overflow-hidden flex-shrink-0">
              <LazyImage
                src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                alt={profile.name}
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: 'rounded-lg',
                })}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Bio content */}
          <div className="flex-1">
            {loading || !profile ? (
              <div>
                {skeleton({ widthCls: 'w-48', heightCls: 'h-8', className: 'mb-4' })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            ) : (
              <div>
                <h4 className="text-lg font-medium mb-2">Nice to meet you all.</h4>
                <p className="mb-2 text-base-content text-opacity-80 text-sm">
                  My name is {profile.name} and I'm a Web Developer, with 4 years of experience in Robotics
                </p>
                <p className="mb-2 text-base-content text-opacity-80 text-sm">
                  I am studying Math and Computer Science at Hartnell college.
                </p>
                <p className="text-base-content text-opacity-80 text-sm">
                  Currently working as a Web Developer at Digital nest, within the bizznest web development team, developing and maintaining responsive websites.
                </p>
              </div>
            )}
            
            {resumeFileUrl &&
              (loading ? (
                <div className="mt-4">
                  {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
                </div>
              ) : (
                <div className="mt-4">
                  <a
                    href={resumeFileUrl}
                    target="_blank"
                    className="btn btn-outline btn-sm text-xs opacity-50"
                    download
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;