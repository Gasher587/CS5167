<script>
  import AddGoal from "./AddGoal.svelte";

  let {goalTitle, goalProgress} = $props();

  let newGoal = $state("");
  let newProgress = $state("");

</script>

<div class="goal-creator">
  <div class="goal-label">
    Goal: {goalTitle}
  </div>

  <div class="goal-description">
    <text>Progress:</text>
        <input
          id="goal-entry"
          type="text"
          size="60"
          bind:value={goalProgress}
        />
  </div>

</div>

<style>
  .goal-creator {
    background-color: rgb(195, 241, 255);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .goal-label {
    padding-right: 40px;
  }

  .goal-description {
  }
</style>
