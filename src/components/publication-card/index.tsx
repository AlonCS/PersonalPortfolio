import { Fragment } from 'react';
import { skeleton } from '../../utils';

/**
 * Renders a custom projects card component with predefined projects.
 * @param loading - A boolean indicating if the component is loading.
 * @returns JSX element representing the CustomProjectsCard.
 */
const CustomProjectsCard = ({
  loading,
}: {
  loading: boolean;
}): JSX.Element => {
  // Software Projects section
  const softwareProjects = [
    {
      title: 'Office flow',
      description: 'Office Flow is a React web app & Google Calendar plugin designed to streamline the process of reserving, scheduling, and viewing office rooms on Google Calendar',
      link: '#', // TODO: Add actual link
    },
    // {
    //   title: 'DevConnect',
    //   description: 'DevConnect is an ecosystem that helps developers find other developers, form teams, and work together efficiently. Developers will find other developers through their github projects and interest in deciding what scope of projects is best for which developer.',
    //   link: '#', // TODO: Add actual link
    // },
    // {
    //   title: 'Artichoke Identifier',
    //   description: 'Artichoke Identifier is a web app that identifies whether or not an artichoke has disease. Then distributes that data into a grid of a farm. In order for farmers to keep account which of their crops should be addressed',
    //   link: '#', // TODO: Add actual link
    // },
    {
      title: 'Randomized Scheduling Application (RSA)',
      description: ' RSA is randomized scheduling application using only frontend technologies (HTML, CSS, and JavaScript). The application will allow users to pair interns or group interns from different locations and departments based on customizable rules. It will provide flexibility to include or exclude interns from the schedule with simple selection controls.',
      link: '#', // TODO: Add actual link
    }
  ];

  // General Projects section
  const generalProjects = [
    {
      title: 'Low-rider Amiga',
      description: ' The “Low-rider Amiga” is a modified agricultural robot that navigates between raised crop beds with a lower center of gravity. Specifically designed to apply pesticides using a hitch mounted at the rear of the robot.',
      link: '#', // TODO: Add actual link
    },
    {
      title: 'Artichoke Amiga',
      description: 'The Artichoke Amiga is a amplified agricultural robot with a steel frame for rows of 3-4 feet of artichoke plants. Specifically designed to mount advanced Luxonis OAK-D W PoE cameras to track crop health and growth.',
      link: '#', // TODO: Add actual link
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

  // Render a project card
  const renderProjectCard = (project: { title: string; description: string; link: string }) => (
    <a
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href={project.link}
      target="_blank"
      rel="noreferrer"
      key={project.title}
    >
      <div className="p-8 h-full w-full">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-base font-medium mb-2 opacity-80">{project.title}</h2>
            <p className="text-sm opacity-60">{project.description}</p>
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

export default CustomProjectsCard;
