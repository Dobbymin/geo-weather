import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const KAKAO_API_KEY = process.env.KAKAO_REST_API_KEY;

const INPUT_PATH = path.join(__dirname, "../src/entities/weather/data/korea_districts.json");
const OUTPUT_PATH = path.join(__dirname, "../src/entities/weather/data/korea_districts_with_coords.json");

const districts: string[] = JSON.parse(fs.readFileSync(INPUT_PATH, "utf-8"));

interface District {
  id: string;
  fullName: string;
  name: string;
  lat: number;
  lng: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCoords = async (address: string) => {
  const query = address.replaceAll("-", " ");
  const res = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  });

  const data = await res.json();

  if (!data.documents || data.documents.length === 0) return null;

  return {
    lat: parseFloat(data.documents[0].y),
    lng: parseFloat(data.documents[0].x),
  };
};

const generate = async () => {
  const result: District[] = [];

  for (const district of districts) {
    const parts = district.split("-");
    const name = parts[parts.length - 1];

    const coords = await getCoords(district);

    if (coords) {
      result.push({
        id: district,
        fullName: district.replaceAll("-", " "),
        name,
        lat: coords.lat,
        lng: coords.lng,
      });
    }

    await delay(110);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));
  console.log(`완료: ${result.length}개 처리됨`);
};

generate();
