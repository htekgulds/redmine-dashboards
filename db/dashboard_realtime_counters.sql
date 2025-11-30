CREATE TABLE dashboard_realtime_counters (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

-- example
-- | key                     | value                           |
-- | ----------------------- | ------------------------------- |
-- | project_5_status_counts | {open: 42, closed: 10, ...}     |
-- | user_12_workload        | {assigned_open: 7, due_soon: 2} |
