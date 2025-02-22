
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info } from "lucide-react";

export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground">
          <Info className="w-4 h-4 mr-2" />
          Data Sources & Limitations
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About Our Data</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Income and marital status data comes from the 2023 Annual Social
            and Economic Supplement (ASEC) of the Current Population Survey
            (CPS) by the U.S. Census Bureau.
          </p>
          <p>
            Height and body mass index (BMI) statistics are derived from the
            2017–2018 National Health and Nutrition Examination Survey
            (NHANES) by the National Center for Health Statistics.
          </p>
          <p>
            Note: Since our data comes from different sources, the final
            percentage is an approximation. Potential correlations between
            factors are not accounted for.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
