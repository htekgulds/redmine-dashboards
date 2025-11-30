CREATE TABLE dashboard_daily_user_stats (
    user_id            INT NOT NULL,
    date               DATE NOT NULL,

    assigned_open_issues INT NOT NULL,
    issues_closed        INT NOT NULL,
    issues_created       INT NOT NULL,

    hours_logged         NUMERIC(10,2),
    avg_resolution_hours NUMERIC(10,2),

    PRIMARY KEY (user_id, date)
);