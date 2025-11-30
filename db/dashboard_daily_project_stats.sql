CREATE TABLE dashboard_daily_project_stats (
    project_id        INT NOT NULL,
    date              DATE NOT NULL,

    open_issues       INT NOT NULL,
    closed_issues     INT NOT NULL,
    new_issues        INT NOT NULL,

    avg_resolution_hours NUMERIC(10,2),
    overdue_issues    INT NOT NULL,

    estimated_hours_total NUMERIC(10,2),
    logged_hours_total    NUMERIC(10,2),

    PRIMARY KEY (project_id, date)
);

CREATE INDEX idx_ddps_date ON dashboard_daily_project_stats (date);