import { GetNextCounterValue } from "./db";
import t from "tap";
import db from "../external/mongo/db";
import ResetDBState from "../test-utils/resets";
import { CloseAllConnections } from "../test-utils/close-connections";

t.test("#GetNextCounterValue", (t) => {
	t.beforeEach(ResetDBState);

	t.test("Increments on valid counter hit", async (t) => {
		const response = await GetNextCounterValue("real-counter");

		// database starts with this at one
		t.equal(response, 2, "Counter should return the current number stored");

		const dbData = await db.counters.findOne({
			counterName: "real-counter",
		});

		t.equal(dbData!.value, 3, "Counter should increment after being hit");
	});

	t.rejects(
		() => GetNextCounterValue("fake-counter"),
		"Could not find sequence document for fake-counter."
	);

	t.end();
});

t.teardown(CloseAllConnections);
