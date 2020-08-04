import React, { Component, Fragment } from "react";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import { FormattedMessage, PublishedComponent } from "@openimis/fe-core";

const styles = theme => ({
    paper: theme.paper.paper,
    tableTitle: theme.table.title,
    item: theme.paper.item,
});

class InsureeFirstServicePointPanel extends Component {

    panel = () => {
        const { classes, edited, readOnly } = this.props;
        if (!!readOnly && !edited.healthFacility) return (
            <div className={classes.msg}>
                <FormattedMessage module="insuree" id="insuree.noFSP" />
            </div>
        );
        return (
            <PublishedComponent
                pubRef="location.DetailedHealthFacility"
                value={edited.healthFacility}
                readOnly={readOnly}
            />
        );
    }

    render() {
        const { intl, classes } = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Fragment>
                            <Typography className={classes.tableTitle}>
                                <FormattedMessage module="insuree" id="insuree.InsureeFirstServicePointPanel.title" />
                            </Typography>
                            <Divider />
                            <Grid container className={classes.item}>
                                <Grid item xs={12} className={classes.item}>
                                    {this.panel()}
                                </Grid>
                            </Grid>
                        </Fragment>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withTheme(
    withStyles(styles)(InsureeFirstServicePointPanel)
);