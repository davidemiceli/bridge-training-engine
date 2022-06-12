<template>
    <div class="grid grid-cols-3 gap-4 text-center items-center place-content-center text-3xl cursor-pointer sm:gap-8 sm:text-5xl">
        <div class="col-span-3">
            <SingleCard :card=playedCardNorth :shapeKind=shapeKind :missingPlaceholder='true' />
        </div>
        <div class="col-span-1">
            <SingleCard :card=playedCardWest :shapeKind=shapeKind :missingPlaceholder='true' />
        </div>
        <div class="col-span-1"></div>
        <div class="col-span-1">
            <SingleCard :card=playedCardEast :shapeKind=shapeKind :missingPlaceholder='true' />
        </div>
        <div class="col-span-3">
            <SingleCard :card=playedCardSouth :shapeKind=shapeKind :missingPlaceholder='true' />
        </div>
    </div>
</template>

<script>

export default {
  props: {
    playedCards: Array,
    shapeKind: {
        type: String,
        default: 'cards'
    }
  },
  methods: {
    playedCardBy(playerId) {
      const { playedCards } = this;
      return (playedCards && playedCards.length) ? playedCards.filter(c => c.player_id == playerId)[0] : null;
    },
    onClickPanel() {
        this.$emit('onClickPanel');
    },
  },
  computed: {
    playedCardSouth() {
      return this.playedCardBy('south');
    },
    playedCardWest() {
      return this.playedCardBy('west');
    },
    playedCardNorth() {
      return this.playedCardBy('north');
    },
    playedCardEast() {
      return this.playedCardBy('east');
    }
  }
}

</script>
