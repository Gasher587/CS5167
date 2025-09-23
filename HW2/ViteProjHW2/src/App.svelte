<script lang="js" module>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import UserInfo from "./lib/UserInfo.svelte";
  import CheckInCounter from "./lib/CheckInCounter.svelte";
  import HistoryEntry from "./lib/HistoryEntry.svelte";
  import SubmitEntry from "./lib/SubmitEntry.svelte";
    import AddGoal from "./lib/AddGoal.svelte";
    import GoalCreator from "./lib/GoalCreator.svelte";
    import Goal from "./lib/Goal.svelte";

  let historyList = $state([
    {
      sleepHours: 0,
      breakfast: "",
      exercise: "",
      shower: false,
      skinCare: false,
      floss: false,
    },
    {
      sleepHours: 8,
      breakfast: "Waffles, Sausage, Coffee",
      exercise: "Swimming: 30",
      shower: true,
      skinCare: true,
      floss: false,
    },
  ]);

  let newSleep = $state(0);
  let newBreakfast = $state("");
  let newExercise = $state("");
  let newShower = $state(false);
  let newSkinCare = $state(false);
  let newFloss = $state(false);

  export const submitEntry = () => {
    let newEntry = {
      sleepHours: 0,
      breakfast: "",
      exercise: "",
      shower: false,
      skinCare: false,
      floss: false,
    };

    newEntry.sleepHours = newSleep;
    newEntry.breakfast = newBreakfast;
    newEntry.exercise = newExercise;
    newEntry.shower = newShower;
    newEntry.skinCare = newSkinCare;
    newEntry.floss = newFloss;

    historyList.push(newEntry);
    };
</script>

<div class="header">
  <UserInfo />
</div>

<main class="journal">
  <div class="workspace">
    <div class="card">
      <CheckInCounter />
    </div>

    <div class="entry-bubble">
      <div class="journal-item">
        <label for="sleep">How long did you sleep? :</label> <br />
        <input type="number" id="sleep" name="sleep" bind:value={newSleep} />
        <br />
      </div>

      <div class="journal-item">
        <label for="Breakfast">What's for Breakfast? :</label> <br />
        <input
          type="text"
          id="Breakfast"
          name="Breakfast"
          bind:value={newBreakfast}
        /> <br />
      </div>

      <div class="journal-item">
        <label for="exercise"> Excercise: </label> <br />
        <input
          type="text"
          id="exercise"
          name="exercise"
          bind:value={newExercise}
        /><br />
      </div>

      <div class="journal-item">
        <label for="shower"> Showered </label>
        <input
          type="checkbox"
          id="shower"
          name="shower"
          bind:checked={newShower}
        /><br />
      </div>

      <div class="journal-item">
        <label for="skinCare"> Skin Care </label>
        <input
          type="checkbox"
          id="skinCare"
          name="skinCare"
          bind:checked={newSkinCare}
        /><br />
      </div>

      <div class="journal-item">
        <label for="floss"> Floss </label>
        <input
          type="checkbox"
          id="floss"
          name="floss"
          bind:checked={newFloss}
        /><br />
      </div>

      <div class="journal-item">
        <SubmitEntry {submitEntry} />
      </div>
    </div>
  </div>

  <div class="user-progress">
    <div class="goals">
          <GoalCreator />
    </div>

    <div class="history">
      <div class="history-bubble" id="history-bubble">
        {#each historyList as historyItem}
          <HistoryEntry {...historyItem} />
          <hr />
        {/each}
      </div>
    </div>
  </div>

  <div class="motivation">
    <img
      class="images"
      src="https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif"
      alt="Motivation Cat"
    />
  </div>
</main>

<style>
  :root {
    --header-text: 1.5em;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  .header {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background-color: rgb(195, 241, 255);
    color: black;
    padding: 20px;
    line-height: var(--header-text);
  }

  .journal {
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100vh - 40px - var(--header-text));
  }

  .workspace {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .entry-bubble {
    background-color: rgb(195, 241, 255);
    border-radius: 10px;
    flex-grow: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .user-progress {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: right;
    flex-grow: 1;
  }

  .goals {
    padding: 20px;
  }

  .history {
    padding: 20px;
  }

  .history-bubble {
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    padding: 10px;
    height: 180px;
    overflow-y: auto;
  }

  .motivation {
    display: flex;
    justify-content: right;
  }

  .journal-item {
    padding: 20px;
  }
</style>
