import getSummoner from "@/app/libs/getSummoner";

export default async function profile({params: {summonerName}}) {
    const summonerData = await getSummoner(summonerName);

    return (
        <div>
            <div>Profile</div>
            <h1>{summonerData.name}</h1>
        </div>
    )
}