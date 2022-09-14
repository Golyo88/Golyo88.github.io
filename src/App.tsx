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
      sections={[{
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['Nodejs', 'Typescript', 'Python', 'C++', 'Java', 'React', 'Angular', 'SQL', 'NOSQL', 'AWS'],
      }, {
        type: 'experiences-list',
        title: 'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Senior Software Engineer',
            company: 'Prerender',
            companyWebSite: 'https://prerender.io',
            datesBetween: '2021.04 - Present',
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
      }, {
        type: 'projects-list',
        title: 'Projects',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Prerender.io',
            description: 'Prerendering your website to get a better ranking with search engines',
            items: [
              { title: 'Prerender.io',
                projectUrl: 'https://prerender.io',
                description: <ProjectDescription
                  // eslint-disable-next-line max-len
                  description="I am one of the three engineers doing all the work. Front end, back end, monitoring, testing, customer success, etc. Prerender helps websites get higher ranks in search engines. We render all of the pages of our customers and store it in our cache so when a bot requests a page the response comes from us. We serve it from the cache faster and we serve a static HTML. Bots like static HTMLs and fast responses..."
                  sections={[
                    { title: 'Frontend', technologies: ['React', 'HTML', 'CSS'] },
                    { title: 'Backend', technologies: ['NodeJs', 'Typescript', 'express', 'tsedio'] },
                    { title: 'Platform', technologies: ['AWS', 'Heroku'] },
                    { title: 'Databse', technologies: ['Postgres', 'Clickhouse'] },
                    { title: 'Cache', technologies: ['Redis'] },
                    { title: 'Other', technologies: ['Docker, Kubernetes'] },
                  ]}
                />,
              },
            ],
          },
          {
            sectionHeader: 'TrueMotion (Acquired By Cambridge Mobile Telematics)',
            description: "The world's largest telematics service provider.",
            items: [
              { title: <b>CrashAssist</b>,
                projectUrl: 'https://vimeo.com/328850686',
                description: <ProjectDescription
                  // eslint-disable-next-line max-len
                  description="Detecting car accidents on-phone and send help to the scene. I was one of the 4 engineers made the backend part of this product. The flow is the following. The mobile detects a crash. Sends some datapoints to the backend. The backend needed to decide if this is a possible accident or a false alarm. Based on the datapoints if the code decided that this is a real accident we had to ask the driver is they are ok. If they did send back the reponse in 60 seconds we had to call them. After this the dispatcher could decide if the driver needed any help. At the end the dispatcher company sent back the results to us. So we could improve our ML models."
                  sections={[
                    { title: 'Backend', technologies: ['Python', 'FastAPI', 'Flask', 'Alchemy'] },
                    { title: 'Platform', technologies: ['AWS'] },
                    { title: 'Databse', technologies: ['RDS', 'ElasticSearch', 'DynamoDB', 'S3'] },
                    { title: 'Cache', technologies: ['Redis'] },
                    { title: 'Other',
                      technologies: [
                        'Docker', 'Lambda', 'SQS', 'SNS', 'SES', 'AWS StepFunctions', 'AWS API Gateway', 'a lot of other AWS tech'] },

                  ]}
                /> },
              { title: <b>TrueView</b>,
                description: <ProjectDescription
                  // eslint-disable-next-line max-len
                  description="Backoffice for the adjustors. The company's customers were the insurance companies. Their agents were doing a lot of manual work with really old tools when an insurance claim got onto their table. It was very unpleasent for the agent and it was even worse for the driver. So we wanted to make that process better for both parties."
                  sections={[
                    { title: 'Frontend', technologies: ['Angular', 'HTML', 'CSS'] },
                    { title: 'Backend', technologies: ['Python', 'FastAPI', 'Flask', 'Alchemy'] },
                    { title: 'Platform', technologies: ['AWS'] },
                    { title: 'Databse', technologies: ['RDS', 'ElasticSearch', 'DynamoDB', 'S3'] },
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
                  description="I was one of the two engineers who created the whole video presentation platform."
                  sections={[
                    { title: 'Frontend', technologies: ['Angular', 'HTML', 'CSS'] },
                    { title: 'Backend', technologies: ['Nodejs', 'Express'] },
                    { title: 'Platform', technologies: ['AWS', 'Heroku'] },
                    { title: 'Databse', technologies: ['MongoDb', 'S3'] },
                  ]}
                />,
              }],
          },
          {
            sectionHeader: 'LogMeIn (Acquired by GoTo)',
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
                  { title: 'Databse', technologies: ['MariaDB'] },
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
                  { title: 'Databse', technologies: ['Cassandra', 'DynamoDB'] },
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
      }, {
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
