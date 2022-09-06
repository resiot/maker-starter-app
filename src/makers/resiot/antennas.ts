import { MakerAntenna } from '../antennaMakerTypes'

const STANDARD_EU = {
  name: 'Indoor/Outdoor 3dBi (EU 868)',
  gain: 3,
} as MakerAntenna

const OUTDOOR68_EU = {
  name: 'Outdoor 6.8dBi (EU 868)',
  gain: 6.8,
} as MakerAntenna

const OUTDOOR80_EU = {
  name: 'Outdoor 8dBi (EU 868)',
  gain: 8,
} as MakerAntenna

export default { STANDARD_EU, OUTDOOR68_EU, OUTDOOR80_EU }
