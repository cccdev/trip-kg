import {useReadCypher} from 'use-neo4j';
import Loading from '../Loading';

function Query() {
  const {cypher, error, loading, first} = useReadCypher('MATCH (n: `博物馆`) RETURN n AS scenic');

  let result = <Loading />;

  if (error) {
    result = <div className="">{error.message}</div>;
  } else if (!loading) {
    const scenic = first?.get('scenic').toString();
    result = <div>{scenic}</div>;
  }

  return (
    <div className="">
      <pre>{cypher}</pre>
      {result}
    </div>
  );
}

export default Query;
