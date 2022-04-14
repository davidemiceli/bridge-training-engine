<template>
    <div class="tile is-ancestor is-mobile is-clickable">
        <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child is-flex is-justify-content-center is-align-items-center">
                <SingleCard :card=playedCardWest :missingPlaceholder='true' :shapeKind=shapeKind :cardSize=cardSize />
            </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child is-flex is-justify-content-center">
                <SingleCard :card=playedCardNorth :missingPlaceholder='true' :shapeKind=shapeKind :cardSize=cardSize />
            </div>
            <div class="tile is-child"></div>
            <div class="tile is-child is-flex is-justify-content-center">
                <SingleCard :card=playedCardSouth :missingPlaceholder='true' :shapeKind=shapeKind :cardSize=cardSize />
            </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child is-flex is-justify-content-center is-align-items-center">
                <SingleCard :card=playedCardEast :missingPlaceholder='true' :shapeKind=shapeKind :cardSize=cardSize />
            </div>
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
    cardSize() {
      return this.shapeKind == 'chars' ? 4 : 1;
    },
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
