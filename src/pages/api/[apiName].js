import { getUnitData } from "@/app/libs/getUnitData";

export default async function handler(req, res) {
  const { apiName } = req.query;

  try {
    const championData = await getUnitData(apiName);
    return res.status(200).json(championData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
