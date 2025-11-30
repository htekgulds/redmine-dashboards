CREATE TABLE dashboard_issue_status_history (
    id SERIAL PRIMARY KEY,
    issue_id INT NOT NULL,
    status_id INT NOT NULL,
    entered_at TIMESTAMP NOT NULL,
    left_at TIMESTAMP NULL,

    time_spent_seconds INT
);

CREATE INDEX idx_dish_issue ON dashboard_issue_status_history (issue_id);