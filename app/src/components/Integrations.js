import React from 'react';

const Integrations = () => {
  return (
    <section className="integrations">
      <h2>Integrations</h2>
      <div className="integration-list">
        <div className="integration">
          <img src="/assets/jira-icon.png" alt="Jira" />
          <p>Jira</p>
        </div>
        <div className="integration">
          <img src="/assets/github-icon.png" alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="integration">
          <img src="/assets/gitlab-icon.png" alt="GitLab" />
          <p>GitLab</p>
        </div>
        <div className="integration">
          <img src="/assets/slack-icon.png" alt="Slack" />
          <p>Slack</p>
        </div>
        <div className="integration">
          <img src="/assets/bitbucket-icon.png" alt="Bitbucket" />
          <p>Bitbucket</p>
        </div>
        <div className="integration">
          <img src="/assets/notion-icon.png" alt="Notion" />
          <p>Notion</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;