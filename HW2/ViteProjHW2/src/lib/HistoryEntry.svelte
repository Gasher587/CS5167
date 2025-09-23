<script>
  let {sleepHours, breakfast, exercise, shower, skinCare, floss} = $props();

</script>

<div class = "history-entry">
  <div class = "history-item">
    Sleep Hours: {sleepHours}
  </div>

  |

  <div class = "history-item">
    Breakfast: {breakfast}
  </div>

  |

  <div class = "history-item">
    Exercise: {exercise}
  </div>

  |

  <div class = "history-item">
    Shower: {shower}
  </div>

  |

  <div class = "history-item">
    Skin Care: {skinCare}
  </div>

  |

  <div class = "history-item">
    Floss: {floss}
  </div>
</div>

<style>
  .history-entry{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .history-item{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
