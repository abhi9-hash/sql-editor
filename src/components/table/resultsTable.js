import { useMemo } from "react";

import BaseTable from "./index";

function ResultsTable(props) {
  const { result, isLoaded, error, timeOfRequest } = props;
  const data = useMemo(() => result, [result]);

  const columns = useMemo(() => {
    if (result.length === 0) {
      return [];
    }
    return Object.keys(result[0]).map((key) => ({
      Header: key,
      accessor: key,
      defaultCanSort: true,
    }));
  }, [result]);

  return (
    <BaseTable
      columns={columns}
      data={data}
      isLoaded={isLoaded}
      error={error}
      paginate
      timeOfRequest={timeOfRequest}
    />
  );
}

export default ResultsTable;
