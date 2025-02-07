import prismaClient from "../../prisma";

class ListTrackersService {
  async execute() {
    const trackers = await prismaClient.tracker.findMany();

    return trackers;
  }
}

export { ListTrackersService }