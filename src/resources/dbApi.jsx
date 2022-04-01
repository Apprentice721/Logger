export function writeDb(timeRecord) {
  console.log(timeRecord);
}

export const getRecords = async () => {
  return await fetch("/api/data")
    .then((response) => response.json())
    .catch((err) => "Error Message: " + err.message);
};
