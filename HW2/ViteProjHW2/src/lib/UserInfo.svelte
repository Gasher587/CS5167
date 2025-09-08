<script module>
  let name = "Jonah Carter"
  let daysActive = $state(0)
  let daysJoined = $state(1)
  let joinedPlurality = $derived( daysJoined > 1 ? "days" : "day")
  let activePlurality = $derived( daysActive > 1 ? "days" : "day")

  export function updateStreak(count) {
    daysActive = count;
  }
  
</script>

<div>
  {name}
  Joined {daysJoined} {joinedPlurality} ago
  Active for {daysActive} {activePlurality}
</div>
