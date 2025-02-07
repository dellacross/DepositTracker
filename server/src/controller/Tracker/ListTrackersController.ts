import { Response } from "express";
import { ListTrackersService } from "../../services/Tracker/ListTrackersService";

class ListTrackersController {
    async handle(req: Request, res: Response) {
        const listTrackersService = new ListTrackersService()

        const trackers = await listTrackersService.execute()

        return res.json({
            tracker: trackers
        });
    }
}

export { ListTrackersController }