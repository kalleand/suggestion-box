CREATE KEYSPACE suggestion_box WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1};

CREATE TABLE IF NOT EXISTS suggestion_box.suggestions (id INT, title TEXT, description TEXT, author TEXT, created_at TIMESTAMP, PRIMARY KEY (id));

INSERT INTO suggestion_box.suggestions (id, title, description, author, created_at) VALUES (1, 'Create suggestion box!', 'We need a suggestion box!', 'Martin', '2019-10-04T10:10:00.000');

SELECT * FROM suggestion_box.suggestions;



 
