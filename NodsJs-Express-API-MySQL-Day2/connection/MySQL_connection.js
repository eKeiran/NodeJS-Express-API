import { createConnection } from 'mysql2';

var sql = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Nirvana@1987@',
  database : 'ECOM_API',
  multipleStatements: true
});
sql.connect();
export default sql;