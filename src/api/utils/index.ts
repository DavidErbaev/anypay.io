import sha256 from "sha256";
import md5 from "md5";

class Utils {
	public generateHash(text: string, type: "sha256" | "md5"): string {
		switch (type) {
			case "md5":
				return md5(text);
			case "sha256":
				return sha256(text);
			default:
				throw new Error("Unknown type");
		}
	}
}

export default new Utils();