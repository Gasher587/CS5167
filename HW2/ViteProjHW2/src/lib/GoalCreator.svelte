<script>
  import AddGoal from "./AddGoal.svelte";
  import Goal from "./Goal.svelte";

  let newGoalTitle = $state("");
  let newProgress = $state("");

  let goal = $state("");
  let goalProgress = $state("");

  let goalList = $state([
    {
      goalTitle: "",
      goalProgress: "",
    },
    {
      goalTitle: "Work Out",
      goalProgress: "Ran 30min",
    },
  ]);

  export const createGoal = () => {
    let newGoal = {
      goalTitle: "",
      goalProgress: "",
    };

    newGoal.goalTitle = newGoalTitle;
    newGoal.goalProgress = newProgress;

    goalList.push(newGoal);

    newGoalTitle = "";
    newProgress = "";
  };
</script>

<div class="goals-bubble">
  {#each goalList as goalItem}
    <div class="goal-separator">
      <Goal {...goalItem} />
    </div>
  {/each}

  <div class="goal-separator">
    <div class="goal-creator">
      <div class="goal-label">
        <text>New Goal:</text>
        <input
          id="goal-entry"
          type="text"
          size="30"
          bind:value={newGoalTitle}
        />
      </div>

      <div class="goal-description">
        <text> Progress:</text>
        <input
          id="goal-description"
          type="text"
          size="45"
          bind:value={newProgress}
        />
      </div>

      <AddGoal {createGoal} />
    </div>
  </div>
</div>

<style>
  .goals-bubble {
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    overflow-y: auto;
    flex-direction: column-reverse;
    flex-grow: 1;
    align-items: right;
    max-height: 400px;
  }

  .goal-separator {
    padding: 5px;
  }

  .goal-creator {
    background-color: rgb(195, 241, 255);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .goal-label {
  }

  .goal-description {
  }
</style>
