import { Fragment } from 'react';
import { skeleton } from '../../utils';
import { SanitizedPublication } from '../../interfaces/sanitized-config';

/**
 * Renders a custom projects card component with predefined projects.
 * @param loading - A boolean indicating if the component is loading.
 * @returns JSX element representing the CustomProjectsCard.
 */
const PublicationCard = ({
  loading,
}: {
  loading: boolean;
  publications: SanitizedPublication[];
}): JSX.Element => {
  // More accurate file paths
  const officeFlowImage = 'Officeflow.png'; // No leading slash
  const rsaImage = 'RSA.png'; // No leading slash
  const lowRiderImage = 'Low-rider-amiga.JPEG'; // No leading slash
  const artichokeImage = 'artichoke-amiga.jpg'; // No leading slash

  // Software Projects section
  const softwareProjects = [
    {
      title: 'Office flow',
      description: 'Office Flow is a React web app & Google Calendar plugin designed to streamline the process of reserving, scheduling, and viewing office rooms on Google Calendar',
      link: '#', // TODO: Add actual link
      image: officeFlowImage,
    },
    {
      title: 'Randomized Scheduling Application (RSA)',
      description: 'RSA is randomized scheduling application using only frontend technologies (HTML, CSS, and JavaScript). The application will allow users to pair interns or group interns from different locations and departments based on customizable rules. It will provide flexibility to include or exclude interns from the schedule with simple selection controls.',
      link: '#', // TODO: Add actual link
      image: rsaImage,
    }
  ];

  // General Projects section
  const generalProjects = [
    {
      title: 'Low-rider Amiga',
      description: 'The "Low-rider Amiga" is a modified agricultural robot that navigates between raised crop beds. Specifically designed to apply pesticides using a hitch mounted at the rear of the robot.',
      link: '#', // TODO: Add actual link
      image: lowRiderImage,
    },
    {
      title: 'Artichoke Amiga',
      description: 'The Artichoke Amiga is a amplified agricultural robot with a steel frame for rows of 3-4 feet of artichoke plants. Specifically designed to mount advanced Luxonis OAK-D W PoE cameras to track crop health and growth.',
      link: '#', // TODO: Add actual link
      image: artichokeImage,
    }
  ];

  // Render a skeleton placeholder when loading
  const renderSkeleton = () => {
    return Array(4).fill(0).map((_, index) => (
      <div className="card shadow-lg compact bg-base-100" key={index}>
        <div className="p-8 h-full w-full">
          <div className="flex flex-col">
            <div className="w-full">
              <h2 className="mb-2">
                {skeleton({
                  widthCls: 'w-32',
                  heightCls: 'h-8',
                  className: 'mb-2',
                })}
              </h2>
              {/* Add image skeleton */}
              <div className="mb-4">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-40',
                  className: 'rounded-lg',
                })}
              </div>
              <div>
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
              </div>
              <div>
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Render a project card with image support - FIXED for consistent sizing
  const renderProjectCard = (project: { 
    title: string; 
    description: string; 
    link: string;
    image?: string; // Make image optional with TypeScript
  }) => (
    <a
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href={project.link}
      target="_blank"
      rel="noreferrer"
      key={project.title}
    >
      <div className="p-8 h-full w-full">
        <div className="flex flex-col h-full">
          {/* Title with fixed height */}
          <h2 className="text-base font-medium mb-2 opacity-80">{project.title}</h2>

          {/* Image container with fixed height */}
          {project.image && (
            <div className="mb-4">
              <div className="relative overflow-hidden rounded-lg border border-base-300 bg-base-200 shadow-sm" style={{ height: '250px' }}>
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-contain rounded-lg" 
                  onError={(e) => {
                    // Error handling code remains the same
                    const target = e.target as HTMLImageElement;
                    const originalSrc = target.src;
                    console.log(`Initial load failed: ${originalSrc}`);
                    
                    // Try different path variations
                    if (!originalSrc.startsWith('/')) {
                      target.src = `/${project.image}`;
                      console.log(`Trying with leading slash: /${project.image}`);
                    } else {
                      // Create fallback canvas image as last resort
                      const canvas = document.createElement('canvas');
                      canvas.width = 800;
                      canvas.height = 400;
                      const ctx = canvas.getContext('2d');
                      if (ctx) {
                        // Create colored background based on project title
                        const colors: {[key: string]: string} = {
                          'Office flow': '#2299dd',
                          'Randomized Scheduling Application (RSA)': '#4285f4',
                          'Low-rider Amiga': '#34a853',
                          'Artichoke Amiga': '#ea4335'
                        };
                        const color = colors[project.title] || '#888888';
                        
                        ctx.fillStyle = color;
                        ctx.fillRect(0, 0, 800, 400);
                        
                        // Add text
                        ctx.fillStyle = 'white';
                        ctx.font = 'bold 36px Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText(project.title, 400, 200);
                        
                        target.src = canvas.toDataURL();
                        console.log(`Generated fallback image for ${project.title}`);
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
          
          {/* Description with equal min-height to align cards */}
          <div className="flex-grow">
            <p className="text-sm opacity-60" style={{ minHeight: '80px' }}>{project.description}</p>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <Fragment>
      {/* Software Projects Section */}
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Software Projects
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  {/* Fixed grid layout with equal width columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading 
                      ? renderSkeleton() 
                      : softwareProjects.map((project) => renderProjectCard(project))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Projects Section */}
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        General Projects
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  {/* Fixed grid layout with equal width columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading 
                      ? renderSkeleton().slice(0, 2)
                      : generalProjects.map((project) => renderProjectCard(project))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;