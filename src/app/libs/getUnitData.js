export async function getUnitData(apiName) {
  const response = await fetch(
    "https://raw.communitydragon.org/pbe/cdragon/tft/en_us.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from external link");
  }

  const data = await response.json();
  const championData = data.champions.find(
    (champion) => champion.apiName === apiName
  );

  if (!championData) {
    throw new Error("Champion not found");
  }

  return championData;
}
