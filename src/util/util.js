export const getList = async (offset) => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?format=json&owner=0x960DE9907A2e2f5363646d48D7FB675Cd2892e91&offset=${offset}&limit=20`,
    {
      method: "GET",
    }
  );
  return response.json();
};

export const getDetail = async (tokenId) => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/${tokenId}/`,
    {
      method: "GET",
    }
  );
  return response.json();
};
