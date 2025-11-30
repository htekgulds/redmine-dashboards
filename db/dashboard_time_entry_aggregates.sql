CREATE TABLE dashboard_time_entry_aggregates (
    date        DATE NOT NULL,
    user_id     INT NOT NULL,
    project_id  INT NOT NULL,
    issue_id    INT,

    hours NUMERIC(10,2) NOT NULL,

    PRIMARY KEY (date, user_id, project_id, issue_id)
);