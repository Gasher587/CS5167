<script>
    import {updateStreak} from "./UserInfo.svelte";
  
  let count = $state(0)
  const increment = () => {
    count += 1; updateStreak(count);
  }

  export function getStreak() {
    return count;
  }

</script>

<button onclick={increment}>
  Check in Streak {count}
</button>
