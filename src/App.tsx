import React from 'react';
import CV from 'react-cv';
import './App.css';
import ProjectDescription from './partials/ProjectDescription';
import image from './assets/images/nandi.jpg';

function App() {
  return (
    <CV
      personalData={{
        name: 'Nandor Borics',
        title: 'Senior Software Engineer',
        // eslint-disable-next-line max-len
        image,
        contacts: [
          { type: 'email', value: 'nandor.borics@gmail.com' },
          { type: 'location', value: 'Budapest, Hungary' },
          { type: 'linkedin',
            value: <a
              href="https://www.linkedin.com/in/n%C3%A1ndor-borics-76a37542"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              {/* eslint-disable-next-line react/jsx-indent */}
                   </a>,
          },
          { type: 'github', value: <a href="github.com/Golyo88" target="_blank">Github</a> },
        ] }}
      sections={[
        {
          type: 'text',
          title: 'Profile',
          // eslint-disable-next-line max-len
          content: "I saw my first computer when I was around 6. It was a C64 and it was love at first sight. I loved playing video games on it and I still do on the modern PCs. I started coding in highschool and there is no day without coding since then. Throughout my career I've created a fault tolerant scalable mqtt broker where one node could handle 1M concurrent connections with lots of concurrent messages. I designed and implemented a system where in case of a car accident the help could be notified in ~1minute. I believe that with the proper engineering support we can change the world!",
          icon: 'usertie',
        },
        {
          type: 'tag-list',
          title: 'Skills Proficiency',
          icon: 'rocket',
          items: ['Nodejs', 'Typescript', 'Python', 'C++', 'Java', 'React', 'Angular', 'SQL', 'NOSQL', 'AWS'],
        }, {
          type: 'projects-list',
          title: 'Projects',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'super.ai',
              // eslint-disable-next-line max-len
              description: 'Generative AI for Documents. Super.AI breaks down complex documents into smaller components, then leverages the best AI, human, and software worker to process each.',
              items: [
                { title: 'super.ai',
                  projectUrl: 'https://super.ai',
                  description: <ProjectDescription
                  // eslint-disable-next-line max-len
                    description="I am responsible for designing and implementing new features e2e. I'm owning a big part of the backend services where my responsibility is to make sure that the system is scalable, fault tolerant and fast."
                    sections={[
                      { title: 'Frontend', technologies: ['React', 'Typescript', 'HTML', 'CSS'] },
                      { title: 'Backend', technologies: ['Java', 'Python'] },
                      { title: 'Platform', technologies: ['AWS', 'Azure'] },
                      { title: 'Database', technologies: ['Postgres', 'Dynamo'] },
                      { title: 'Cache', technologies: ['Redis'] },
                      { title: 'Other', technologies: ['Docker, Kubernetes'] },
                    ]}
                  />,
                },
              ],
            },
            {
              sectionHeader: 'Prerender.io',
              // eslint-disable-next-line max-len
              description: 'Prerendering your website to get a better ranking with search engines. Prerender helps websites get higher ranks in search engines. We render all of the pages of our customers and store it in our cache so when a bot requests a page the response comes from us. We serve it from the cache faster and we serve a static HTML. Bots like static HTMLs and fast responses...',
              items: [
                { title: 'Prerender.io',
                  projectUrl: 'https://prerender.io',
                  description: <ProjectDescription
                  // eslint-disable-next-line max-len
                    description="I was one of the three engineers doing all the work. Frontend, backend, monitoring, testing, customer success, etc. I'm responsible to discover new features and then design, implement, test, deploy those in small iterative steps. This is a fully scalable, distributed system. The system currently renders couple billion of pages every day."
                    sections={[
                      { title: 'Frontend', technologies: ['React', 'HTML', 'CSS'] },
                      { title: 'Backend', technologies: ['NodeJs', 'Typescript', 'express', 'tsedio'] },
                      { title: 'Platform', technologies: ['AWS', 'Heroku'] },
                      { title: 'Database', technologies: ['Postgres', 'Clickhouse'] },
                      { title: 'Cache', technologies: ['Redis'] },
                      { title: 'Other', technologies: ['Docker, Kubernetes'] },
                    ]}
                  />,
                },
              ],
            },
            {
              sectionHeader: 'TrueMotion (Acquired By Cambridge Mobile Telematics)',
              // eslint-disable-next-line max-len
              description: "The world's largest telematics service provider. The company's SDK is build into the biggest car insurer companies mobile apps. The SDK collects multiple sensor data in different frequencies. With this data there are a lot of possibilities. Two main focuses that I've been part of. User based insurance. If you drive better based on configurable factors you will get better prices on your car insurance. And crash detection. The average time in the US where the emergency services are notified at is 7 minutes. This is too much time. We were on a mission to reduce that time to 1 minute.",
              items: [
                { title: <b>CrashAssist</b>,
                  projectUrl: 'https://vimeo.com/328850686',
                  description: <ProjectDescription
                  // eslint-disable-next-line max-len
                    description="I was responsible to design a fast, fault tolerant, distributed, life saver system which does the following: In case of an accident we had to ask the driver if they are OK or not. If the response didn't arrive in 60 seconds we had to call for help to the location of the accident. After the design I was part of the team which implemented it. The team's responsibility was to implement new features, fix bugs, test and deploy the system. We were working on AWS. We used step functions, lambdas, dynamodb, sqs, sns to make this happen. After that I was responsible to design the reporting system for these accidents. And we implemented it with the same team."
                    sections={[
                      { title: 'Backend', technologies: ['Python', 'FastAPI', 'Flask', 'Alchemy'] },
                      { title: 'Platform', technologies: ['AWS'] },
                      { title: 'Database', technologies: ['RDS', 'ElasticSearch', 'DynamoDB', 'S3'] },
                      { title: 'Cache', technologies: ['Redis'] },
                      { title: 'Other',
                        technologies: [
                          'Docker', 'Lambda', 'SQS', 'SNS', 'SES', 'AWS StepFunctions', 'AWS API Gateway', 'a lot of other AWS tech'] },

                    ]}
                  /> },
                { title: <b>TrueView</b>,
                  description: <ProjectDescription
                  // eslint-disable-next-line max-len
                    description="Backoffice for the adjusters. The company's customers were the insurance companies. Their agents were doing a lot of manual work with really old tools when an insurance claim got onto their table. It was very unpleasent for the agent and it was even worse for the driver. So we wanted to make that process better for both parties. I was responsible to create a scalable, distributed system which integrates into the other parts of the company."
                    sections={[
                      { title: 'Frontend', technologies: ['Angular', 'HTML', 'CSS'] },
                      { title: 'Backend', technologies: ['Python', 'FastAPI', 'Flask', 'Alchemy'] },
                      { title: 'Platform', technologies: ['AWS'] },
                      { title: 'Database', technologies: ['RDS', 'ElasticSearch', 'DynamoDB', 'S3'] },
                      { title: 'Cache', technologies: ['Redis'] },
                      { title: 'Other',
                        technologies: [
                          'Docker', 'Lambda', 'AWS API Gateway'] },
                    ]}
                  />,
                },
              ],
            },
            {
              sectionHeader: 'Fishbole',
              description: 'Video presentations',
              items: [
                { title: <b>Full Stack Engineer</b>,
                  projectUrl: 'https://fishbole.io',
                  description: <ProjectDescription
                    // eslint-disable-next-line max-len
                    description="I was one of the two engineers who created the whole video presentation platform. I was responsible to discover new features based on user behavior, design, implement, test and deploy them."
                    sections={[
                      { title: 'Frontend', technologies: ['Angular', 'HTML', 'CSS'] },
                      { title: 'Backend', technologies: ['Nodejs', 'Express'] },
                      { title: 'Platform', technologies: ['AWS', 'Heroku'] },
                      { title: 'Database', technologies: ['MongoDb', 'S3'] },
                    ]}
                  />,
                }],
            },
            {
              sectionHeader: 'LogMeIn (Acquired by GoTo)',
              // eslint-disable-next-line max-len
              description: "I started here as an intern and i had the opportunity to learn from Hungary's bests and I could be part of multiple teams.",
              items: [{
                title: <b>NLP</b>,
                description: <ProjectDescription
                // eslint-disable-next-line max-len
                  description="I was responsible for developing various NLP and deep learning solutions to extend LogMeIn's current and future products."
                  sections={[
                    { title: 'Frontend', technologies: ['Angular', 'HTML', 'CSS'] },
                    { title: 'Backend', technologies: ['python', '.Net Core'] },
                    { title: 'Platform', technologies: ['Azure'] },
                    { title: 'Database', technologies: ['MariaDB'] },
                    { title: 'Other', technologies: ['TensorFlow'] },
                  ]}
                />,
              }, {
                title: <b>Xively (formerly known as Pachube) (Acquired By Google)</b>,
                description: <ProjectDescription
                // eslint-disable-next-line max-len
                  description="IoT platform. I was part of a team of 6 where we had to build a scalable MQTT message broker. 1 machine on AWS could handle 1 Million concurrent connections where every node sent 10 messages / second. Back then there were no tools to test this. So 2 of us decided to build a testing tool to see how much can the system handle."
                  sections={[
                    { title: 'Backend', technologies: ['C++', 'GoLang', 'NodeJs', 'Clojure', 'Java', 'C#'] },
                    { title: 'Platform', technologies: ['AWS'] },
                    { title: 'Database', technologies: ['Cassandra', 'DynamoDB'] },
                  ]}
                />,
              }, {
                title: <b>ScreenServer Lib</b>,
                description: <ProjectDescription
                // eslint-disable-next-line max-len
                  description="Back then screen sharing wasn't that easy as today. We built a library for multiple LogMeIn products which could capture the desktop's image and send it through the wire."
                  sections={[
                    { title: '', technologies: ['C++', 'Qt'] },
                  ]}
                />,
              }],
            },
          ],
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Full Stack Engineer',
              company: 'super.ai',
              companyWebSite: 'https://super.ai',
              datesBetween: '2022.12 - Present',
              descriptionTags: ['Java', 'Python', 'React', 'Typescript', 'AWS'],
            },
            {
              title: 'Senior Software Engineer',
              company: 'Prerender',
              companyWebSite: 'https://prerender.io',
              datesBetween: '2021.04 - 2022.11',
              descriptionTags: ['Nodejs', 'Typescript', 'React'],
            },
            {
              title: 'Senior Software Engineer',
              company: 'TrueMotion (Acquired By Cambridge Mobile Telematics)',
              companyWebSite: 'https://www.cmtelematics.com/',
              datesBetween: '2017.12 - 2021.04',
              descriptionTags: ['Python', 'Angular'],
            },
            {
              title: 'Senior Software Engineer',
              company: 'fishbole',
              companyWebSite: 'https://fishbole.io',
              datesBetween: '2016.10 - 2017.12',
              descriptionTags: ['NodeJs', 'Angular'],
            },
            {
              title: 'Senior Software Engineer',
              company: 'LogMeIn (Acquired by GoTo)',
              companyWebSite: 'https://www.logmein.com',
              datesBetween: '2016.01 - 2016.10',
              descriptionTags: ['C++', 'GoLang', 'Clojure', '.NetCore', 'Java', 'C#'],
            },
            {
              title: 'Software Engineer',
              company: 'LogMeIn (Acquired by GoTo)',
              companyWebSite: 'https://www.logmein.com',
              datesBetween: '2012.05 - 2016.01',
              descriptionTags: ['C++', 'Qt'],
            },
            {
              title: 'Software Engineer Intern',
              company: 'LogMeIn (Acquired by GoTo)',
              companyWebSite: 'https://www.logmein.com',
              datesBetween: '2012.01 - 2012.05',
              descriptionTags: ['C++', 'Qt'],
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Business Information Technologiest (BS)',
              authority: 'University of Szeged',
              authorityWebSite: 'http://sci.u-szeged.hu/',
              rightSide: '2007 - 2012',
            },
          ],
        }, {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'English',
              authorityMeta: 'Professional',
            },
            {
              authority: 'Hungarian',
              authorityMeta: 'Native',
            },
          ],
        }]}
      branding={false}
    />
  );
}

export default App;
